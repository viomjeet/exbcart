'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Plus, Briefcase, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';


interface Service {
  id: number;
  name: string;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [serviceName, setServiceName] = useState("");

  const getServices = () => {
    axios.get("/api/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((err) => {
        toast.error("Fetch karne mein error:", err);
      });
  };

  useEffect(() => {
    getServices();
  }, []);

  const addService = async () => {
    if (!serviceName.trim()) {
      toast.error("Service name cannot be empty!");
      return;
    }
    try {
      const nextId = services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1;
      const response = await axios.post("/api/services", {
        id: nextId,
        name: serviceName
      });
      toast.success("Service added successfully.");
      setServiceName("");
      getServices();
    } catch (error: any) {
      toast.error(error);
    }
  };

  const deleteService = async (id: number) => {
    try {
      await axios.delete(`/api/services?id=${id}`);
      toast.success("Delete successfully.");
      getServices();
    } catch (error: any) {
      toast.error("Error:", error);
    }
  };

  return (


    <div className="w-full min-h-[calc(100vh-69px)] bg-background text-foreground flex flex-col p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Services List</h1>
      </div>
      <div className="w-full max-w-3xl mx-auto bg-background text-foreground flex flex-col gap-6">

        {services.length === 0 ? (
          <p className="text-sm text-foreground/50 py-4">No services found or loading...</p>
        ) : (
          <div className="flex flex-col gap-2 w-full">
            {services.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between px-4 py-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors w-full"
              >
                <div className="flex items-center gap-3">
                  <Briefcase className="h-4 w-4 text-foreground/60" />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => deleteService(item.id)}
                  className="p-1.5 rounded-md text-foreground/40 hover:text-red-500 hover:bg-red-500/10 transition-colors"
                  aria-label="Delete Service"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center gap-2 pt-4 border-t border-foreground/10 w-full mt-2">
          <input
            type="text"
            placeholder="Enter service name..."
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            className="flex-1 px-4 py-2 text-sm bg-foreground/5 border border-foreground/10 rounded-lg focus:outline-none focus:border-foreground/30 text-foreground placeholder:text-foreground/40 transition-colors"
          />
          <button type="button" onClick={addService}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-foreground text-background hover:opacity-90 transition-colors shrink-0"
          >
            <Plus className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>
      </div>

    </div>
  );
}