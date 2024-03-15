import { Card } from "./Components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Components/ui/tabs"



function App() {

  return (
    <>
      <div className="mx-[20%]">
        <h1 className="croll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase mt-5">Iste ipsum corrupti laborum <br /> pariatur</h1>
        <p className="text-gray-500 mt-5">Ut deserunt vel et praesentium tenetur doloribus iure itaque tempore, cupiditate distinctio.</p>
        <Tabs className="mt-5">
          <TabsList defaultValue="webdev" className="bg-gray-100 rounded-full p-0 text-gray-400">
            <TabsTrigger value="webdev" className="px-6 h-full rounded-full data-[state=active]:bg-slate-900 data-[state=active]:text-white">Web Developement</TabsTrigger>
            <TabsTrigger value="design" className="px-6 h-full rounded-full data-[state=active]:bg-slate-900 data-[state=active]:text-white">Design</TabsTrigger>
            <TabsTrigger value="digicom" className="px-6 h-full rounded-full data-[state=active]:bg-slate-900 data-[state=active]:text-white">Communication digitale</TabsTrigger>
          </TabsList>
          <TabsContent value="webdev">
          </TabsContent>
          <TabsContent value="design">
          </TabsContent>
          <TabsContent value="digicom">
          </TabsContent>
        </Tabs>
        <div className="mt-6 flex flex-row gap-3">
        <Card className="bg-phone bg-cover bg-center h-[50vh] rounded-2xl flex-[2]">

        </Card>
        <Card className="bg-figma bg-cover bg-center h-[50vh] rounded-2xl flex-[1]">

        </Card>
        </div>
        <div className="mt-3 flex flex-row gap-3">
        <Card className="bg-figma bg-cover bg-center h-[50vh] rounded-2xl flex-[1]">

        </Card>
        <Card className="bg-phone bg-cover bg-center h-[50vh] rounded-2xl flex-[2]">

        </Card>
        </div>
      </div>
    </>
  )
}

export default App
