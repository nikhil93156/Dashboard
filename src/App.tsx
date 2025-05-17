import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/app-sidebar"
import { ArticlesDashboard } from "./components/article-dashboard"

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex-1">
        <ArticlesDashboard />
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
