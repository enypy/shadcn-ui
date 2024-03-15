import { Button } from "./Components/ui/button"
import { Card } from "./Components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Components/ui/tabs"
import Heading3 from "./Components/heading3"
import imgImport from "./lib/imgImport"



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
          <Card className="h-[50vh] flex-[2]">
            <img
              src={imgImport('phone.jpg')}
              className="absolute inset-0 w-full h-full object-cover grayscale z-[1]"
              alt="Phone"
            />
            <div className="relative z-[2] flex flex-col-reverse al w-full h-full p-10">
              <Button variant="outline" className="z-[4] py-6">
                View Product
              </Button>
              <Heading3 className={"mb-12 z-[2]"}>
                Delectus perspiciatis tempora quo libero nesciunt iste accusantium!
              </Heading3>
              <div className="p-10 absolute inset-0 w-full h-full object-cover z-[3] bg-[#6565f3] opacity-0 hover:opacity-100 transition-all duration-500">
                <Heading3 className={"mt-8"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est optio iste deleniti quidem, similique suscipit eaque eius dolorem, eveniet harum nihil in asperiores repellendus at sed voluptas nisi corporis!
                </Heading3>
              </div>
            </div>
          </Card>

          <Card className="h-[50vh] flex-[1]">
            <img
              src={imgImport('figma.jpg')}
              className="absolute inset-0 w-full h-full object-cover grayscale z-[1]"
              alt="Figma"
            />
            <div className="relative z-[2] flex flex-col-reverse al w-full h-full p-10 bg-[#fe237040]">
              <Button variant="outline" className="z-[4] py-6">
                View Product
              </Button>
              <Heading3 className={"mb-12 z-[2]"}>
                Delectus perspiciatis tempora quo!
              </Heading3>
              <div className="p-10 absolute inset-0 w-full h-full object-cover z-[3] bg-[#fe2370] opacity-0 hover:opacity-100 transition-all duration-500">
                <Heading3 className={"mt-8"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est optio iste deleniti quidem!
                </Heading3>
              </div>
            </div>
          </Card>
        </div>
        <div className="mt-3 flex flex-row gap-3">
          <Card className="h-[50vh] flex-[1]">
            <img
              src={imgImport('figma.jpg')}
              className="absolute inset-0 w-full h-full object-cover grayscale z-[1]"
              alt="Figma"
            />
            <div className="relative z-[2] flex flex-col-reverse al w-full h-full p-10 bg-[#6565f340]">
              <Button variant="outline" className="z-[4] py-6">
                View Product
              </Button>
              <Heading3 className={"mb-12 z-[2]"}>
                Delectus perspiciatis tempora quo!
              </Heading3>
            </div>
          </Card>
          <Card className="h-[50vh] flex-[2]">
            <img
              src={imgImport('phone.jpg')}
              className="absolute inset-0 w-full h-full object-cover grayscale z-[1]"
              alt="Phone"
            />
            <div className="relative z-[2] flex flex-col-reverse al w-full h-full p-10">
              <Button variant="outline" className="z-[4] py-6">
                View Product
              </Button>
              <Heading3 className={"mb-12 z-[2]"}>
                Delectus perspiciatis tempora quo libero nesciunt iste accusantium!
              </Heading3>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default App
