import Header from '@/components/header';
import Welcome from "@/components/welcome";
import Universities from "@/components/universities";
import AI from "@/components/ai";
import WhyBHE from "@/components/why-bhe";
import Story from "@/components/story";
import Destinations from "@/components/destinations";
import Service from "@/components/services";
import Opportunity from '@/components/oppurtunity';


export default function Home() {
  return (
    <>
    <Header></Header>
    <Welcome></Welcome>
    <Universities></Universities>
    <AI></AI>
    <WhyBHE></WhyBHE>
    <Story></Story>
    <Destinations></Destinations>
    <Service></Service>
    <Opportunity></Opportunity>
    </>
  );
}
