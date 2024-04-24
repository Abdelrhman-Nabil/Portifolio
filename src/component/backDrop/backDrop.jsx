import './backDrop.css'

const Backdrop=({onClick,data})=>{
    console.log(data.color)
    const color=data.color
// return <div className=`${}` onClick={onClick}></div>
  function boka(){
    // `${color==="black"}`?"backdrop-black":"backdrop-white"
    color==="black"?console.log("black1"):console.log("black2")
  }

  boka()
if(color==="black"){
    return<div className={"backdrop-black"} onClick={onClick}></div>
}
else{
    return<div className={"backdrop-white"} onClick={onClick}></div>

}

}
export default Backdrop