
function HeaderIcons({title,Icon}) {
  return (
    <div className="group cursor-pointer flex flex-col justify-center items-center w-12 hover:w-20 hover:text-gray-100">
        <Icon className="h-8 mb-1 group-hover:animate-bounce transition"/>
        <p className=" tracking-widest hidden group-hover:block transition-all 5s">{title}</p>
    </div>
  )
}

export default HeaderIcons