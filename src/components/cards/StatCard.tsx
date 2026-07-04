import type { Stat } from "@/lib/types";

export default function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="text-center">
      <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
        {stat.value}
      </p>
      <p className="mt-2 text-sm text-white/80">{stat.label}</p>
    </div>
  );
}
