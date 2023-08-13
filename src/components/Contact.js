const Contact = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col w-[50%] shadow-md bg-[#edede9] rounded-lg m-6 p-2  md:mx-[6.5rem] lg:mx-44 justify-between  ">
        <h1 className="text-xl mt-2">Contact Us Page</h1>
        <p className="mt-1">Email : shadevsrk261@gmail.com</p>
        <p className="mt-1">Twitter : @ShadevKumar20</p>
        <button className="p-1 m-1 bg-slate-200 hover:bg-slate-300 rounded-lg">Submit</button>
        <button className="p-1 m-1 bg-slate-200 hover:bg-slate-300 rounded-lg">Delete</button>
      </div>
    </div>
  )
}

export default Contact
