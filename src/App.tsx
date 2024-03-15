import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Components/ui/tabs"



function App() {

  return (
    <>
      <div className="mx-32">
        <h1 className="croll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase mt-5">Iste ipsum corrupti laborum <br /> pariatur</h1>
        <p className="text-gray-500 mt-5">Ut deserunt vel et praesentium tenetur doloribus iure itaque tempore, cupiditate distinctio.</p>
        <Tabs className="mt-5">
          <TabsList defaultValue="webdev" className="bg-gray-100 rounded-full p-0 text-gray-400">
            <TabsTrigger value="webdev" className="px-6 h-full rounded-full data-[state=active]:bg-slate-900 data-[state=active]:text-white">Web Developement</TabsTrigger>
            <TabsTrigger value="design" className="px-6 h-full rounded-full data-[state=active]:bg-slate-900 data-[state=active]:text-white">Design</TabsTrigger>
            <TabsTrigger value="digicom" className="px-6 h-full rounded-full data-[state=active]:bg-slate-900 data-[state=active]:text-white">Communication digitale</TabsTrigger>
          </TabsList>
          <TabsContent value="webdev">
            reprehenderit atque cum ad autem perferendis laboriosam culpa!
          </TabsContent>
          <TabsContent value="design">
            Eveniet atque neque quas quae. Fuga voluptatem, natus minus sequi, doloribus aspernatur recusandae expedita,
          </TabsContent>
          <TabsContent value="digicom">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default App
