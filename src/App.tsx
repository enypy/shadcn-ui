import { Button } from "./Components/ui/button"
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
          <Card className="h-[50vh] rounded-2xl flex-[2] relative overflow-hidden border-0">
            <img
              src={new URL('/src/assets/images/phone.jpg', import.meta.url).href}
              className="absolute inset-0 w-full h-full object-cover grayscale z-[1]"
              alt="Phone"
            />
            <div className="relative z-[2] flex flex-col-reverse al w-full h-full p-10">
              <Button
                variant="outline"
                className="relative z-[4] w-56 py-6 mb-3 rounded-3xl border-white/40 bg-white/10 backdrop-blur-[1px] text-white font-bold hover:text-white hover:backdrop-blur-sm hover:bg-white/20 border-2"
              >
                View Product
              </Button>
              <h3
                className="relative z-[2] mb-8 scroll-m-20 text-2xl font-semibold tracking-tight text-white"
              >
                Delectus perspiciatis tempora quo libero nesciunt iste accusantium!
              </h3>
              <div className="p-10 absolute inset-0 w-full h-full object-cover z-[3] bg-[#6565f3] opacity-0 hover:opacity-100 transition-all duration-500">
                <h3
                  className="relative z-[2] mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-white"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est optio iste deleniti quidem, similique suscipit eaque eius dolorem, eveniet harum nihil in asperiores repellendus at sed voluptas nisi corporis!
                </h3>
              </div>
            </div>
          </Card>
          <Card className="bg-figma bg-cover bg-center grayscale h-[50vh] rounded-2xl flex-[1]">
            <div className="h-full w-full rounded-2xl bg-[rgba(96, 33, 50, 0.1)]">

            </div>

          </Card>
        </div>
        <div className="mt-3 flex flex-row gap-3">
          <Card className="bg-figma bg-cover bg-center grayscale h-[50vh] rounded-2xl flex-[1]">

          </Card>
          <Card className="bg-phone bg-cover bg-center grayscale h-[50vh] rounded-2xl flex-[2]">

          </Card>
        </div>
      </div>
    </>
  )
}

export default App
