
import { PromotionVideos } from "@/components/PromotionVideos/PromotionVideos"; 
import { ResVideoItem, PageParams } from "./page.interface";

export default async function Page({ params }: PageParams) {
  try {
    const res = await fetch(`https://terrific-live.free.beeceptor.com/promotionVideo/${params.id}`);
    const data: ResVideoItem[] = await res.json();
    return (
      <div className="flex flex-col">
        <PromotionVideos videos={data} />
      </div>
    )
  } catch (error) {
    throw new Error("Somthing went wrong, Please try again...")  
  }
}
