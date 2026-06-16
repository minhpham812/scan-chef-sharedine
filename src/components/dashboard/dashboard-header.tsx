import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";

interface DashboardHeaderProps {
  chefName: string;
}

export function DashboardHeader({ chefName }: DashboardHeaderProps) {
  return (
    <PageHeader
      title={chefName}
      subtitle="おはようございます"
      action={
        <Button
          variant="ghost"
          size="icon"
          aria-label="通知"
          className="h-10 w-10 rounded-full border border-border bg-white text-[#2c2a24]"
        >
          <Bell className="h-5 w-5" />
        </Button>
      }
    />
  );
}
