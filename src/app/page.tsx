import connectDB from "@/utils/connectDb"

const HomePage = async() => {

  await connectDB()
  return (
    <div>HomePage</div>
  )
}
export default HomePage