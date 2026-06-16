import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Vehicle = {
  id: number;
  brand: string;
  model: string;
  year: number | null;
  pricePerDay: string;
  imageUrl: string | null;
  description: string | null;
  available: boolean;
};

export default function AdminVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    brand: "",
    model: "",
    year: "",
    pricePerDay: "",
    imageUrl: "",
    description: "",
    available: true,
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      navigate("/admin/login");
    }
  }, [navigate]);

  const fetchVehicles = async () => {
    try {
      const res = await fetch("/api/vehicles");
      const data = await res.json();
      setVehicles(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      brand: form.brand,
      model: form.model,
      year: form.year ? Number(form.year) : null,
      pricePerDay: form.pricePerDay,
      imageUrl: form.imageUrl || null,
      description: form.description || null,
      available: form.available,
    };

    const url = editingId ? `/api/vehicles/${editingId}` : "/api/vehicles";
    const method = editingId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setForm({ brand: "", model: "", year: "", pricePerDay: "", imageUrl: "", description: "", available: true });
        setEditingId(null);
        fetchVehicles();
      } else {
        alert("Erreur lors de l'enregistrement");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Supprimer ce véhicule ?")) return;
    try {
      const res = await fetch(`/api/vehicles/${id}`, { method: "DELETE" });
      if (res.ok) fetchVehicles();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (vehicle: Vehicle) => {
    setEditingId(vehicle.id);
    setForm({
      brand: vehicle.brand,
      model: vehicle.model,
      year: vehicle.year?.toString() || "",
      pricePerDay: vehicle.pricePerDay,
      imageUrl: vehicle.imageUrl || "",
      description: vehicle.description || "",
      available: vehicle.available,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  if (loading) return <div className="p-8">Chargement...</div>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gestion des véhicules</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Déconnexion
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          placeholder="Marque *"
          className="p-2 border rounded"
          value={form.brand}
          onChange={(e) => setForm({ ...form, brand: e.target.value })}
          required
        />
        <input
          placeholder="Modèle *"
          className="p-2 border rounded"
          value={form.model}
          onChange={(e) => setForm({ ...form, model: e.target.value })}
          required
        />
        <input
          placeholder="Année"
          className="p-2 border rounded"
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
        />
        <input
          placeholder="Prix par jour (MAD) *"
          className="p-2 border rounded"
          value={form.pricePerDay}
          onChange={(e) => setForm({ ...form, pricePerDay: e.target.value })}
          required
        />
        <input
          placeholder="URL de l'image"
          className="p-2 border rounded"
          value={form.imageUrl}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="p-2 border rounded"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.available}
            onChange={(e) => setForm({ ...form, available: e.target.checked })}
          />
          <label>Disponible</label>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {editingId ? "Mettre à jour" : "Ajouter"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm({ brand: "", model: "", year: "", pricePerDay: "", imageUrl: "", description: "", available: true });
            }}
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
          >
            Annuler
          </button>
        )}
      </form>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Marque</th>
              <th className="p-2 text-left">Modèle</th>
              <th className="p-2 text-left">Année</th>
              <th className="p-2 text-left">Prix/jour</th>
              <th className="p-2 text-left">Disponible</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((v) => (
              <tr key={v.id} className="border-t">
                <td className="p-2">{v.id}</td>
                <td className="p-2">{v.brand}</td>
                <td className="p-2">{v.model}</td>
                <td className="p-2">{v.year || "-"}</td>
                <td className="p-2">{v.pricePerDay} MAD</td>
                <td className="p-2">{v.available ? "✅" : "❌"}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleEdit(v)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(v.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
