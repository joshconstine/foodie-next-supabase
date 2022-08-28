import { supabase } from "../../../utils/api";

export default async function posts(req: any, res: any) {
  if (req.method === "GET") {
    let { data, error } = await supabase.from("posts").select("*");
    console.log(data);
    res.status(200).json(data);
  } else {
    // Handle any other HTTP method
    console.log("no api for this method");
  }
}
