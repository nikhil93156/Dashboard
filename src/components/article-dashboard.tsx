"use client"

import { useState } from "react"
import { Search, ChevronDown, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Article = {
  id: number
  title: string
  keyword: string
  keywordTag: string
  words: number
  createdOn: string
  view: string
}

export function ArticlesDashboard() {
  const [articles] = useState<Article[]>([
    {
      id: 1,
      title: "How to Improve Your Skills in League of Legends",
      keyword: "league of legends [23400000]",
      keywordTag: "Keyword [Traffic]",
      words: 4575,
      createdOn: "20 hours ago",
      view: "View",
    },
    {
      id: 2,
      title: "How to Master Last Hitting in League of Legends",
      keyword: "league of legends [23400000]",
      keywordTag: "Keyword [Traffic]",
      words: 3480,
      createdOn: "21 hours ago",
      view: "View",
    },
    {
      id: 3,
      title: "7 Tips for Better Teamplay in League of Legends",
      keyword: "league of legends [23400000]",
      keywordTag: "Keyword [Traffic]",
      words: 2676,
      createdOn: "4 day ago",
      view: "View",
    },
    {
      id: 4,
      title: "Top Virtual Executive Assistant Services [2024]",
      keyword: "virtual executive assistant [3900]",
      keywordTag: "Keyword [Traffic]",
      words: 2408,
      createdOn: "1 Oct. 24",
      view: "View",
    },
    {
      id: 5,
      title: "Unlimited Graphics Design Solutions",
      keyword: "unlimited graphic design services [350]",
      keywordTag: "Keyword [Traffic]",
      words: 1703,
      createdOn: "",
      view: "View",
    },
    {
      id: 6,
      title: "Top Amazon Diamond Merchants for Quick Access to Funds",
      keyword: "amazon payment methods [3600]",
      keywordTag: "Keyword [Traffic]",
      words: 3647,
      createdOn: "",
      view: "View",
    },
    {
      id: 7,
      title: "Backlinks 101: What are backlinks and why they're important [Free template]",
      keyword: "backlinks [8100]",
      keywordTag: "Keyword [Traffic]",
      words: 2261,
      createdOn: "",
      view: "View",
    },
    {
      id: 8,
      title: "7 Leading AI SEO Tools in 2024 [Ranked & Compared]",
      keyword: "ai seo software [1160]",
      keywordTag: "Keyword [Traffic]",
      words: 1543,
      createdOn: "",
      view: "View",
    },
    {
      id: 9,
      title: "Unlimited Graphic Design Services You Can Rely On",
      keyword: "unlimited graphic design services [350]",
      keywordTag: "Keyword [Traffic]",
      words: 1874,
      createdOn: "",
      view: "View",
    },
  ])

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <h1 className="text-2xl font-bold">Articles</h1>
        </div>
      </header>
      <main className="flex-1 p-6">
        <Tabs defaultValue="generated">
          <div className="flex justify-center mb-6">
            <TabsList className="grid grid-cols-4 w-[600px]">
              <TabsTrigger value="generated">Generated Articles</TabsTrigger>
              <TabsTrigger value="published">Published Articles</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled Articles</TabsTrigger>
              <TabsTrigger value="archived">Archived Articles</TabsTrigger>
            </TabsList>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search for Title & Keywords..." className="pl-8 w-full" />
            </div>
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Article
            </Button>
          </div>

          <TabsContent value="generated" className="m-0">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[30px]">
                      <div className="flex items-center justify-center">
                        <input type="checkbox" className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Article Title</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        <span>Keyword [Traffic]</span>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        <span>Words</span>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        <span>Created On</span>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="text-center">Action</TableHead>
                    <TableHead className="text-center">Publish</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {articles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell>
                        <div className="flex items-center justify-center">
                          <input type="checkbox" className="h-4 w-4" />
                        </div>
                      </TableCell>
                      <TableCell>{article.title}</TableCell>
                      <TableCell>{article.keyword}</TableCell>
                      <TableCell>{article.words}</TableCell>
                      <TableCell>{article.createdOn}</TableCell>
                      <TableCell>
                        <div className="flex justify-center">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-center">
                          <Button variant="ghost" size="icon" className="rounded-full bg-blue-50 text-blue-500">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">Total 9 Article Titles</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Show</span>
                  <select className="h-8 rounded-md border border-input px-2 py-1 text-sm">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                  </select>
                  <span className="text-sm">entries per page</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <span className="text-sm">1 / 1</span>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="published" className="m-0">
            <div className="flex items-center justify-center h-32">
              <p className="text-muted-foreground">No published articles found</p>
            </div>
          </TabsContent>

          <TabsContent value="scheduled" className="m-0">
            <div className="flex items-center justify-center h-32">
              <p className="text-muted-foreground">No scheduled articles found</p>
            </div>
          </TabsContent>

          <TabsContent value="archived" className="m-0">
            <div className="flex items-center justify-center h-32">
              <p className="text-muted-foreground">No archived articles found</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
