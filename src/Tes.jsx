export function Tes(props){
  // console.log(props)
    return (
      <div>
        <p>Nama : {props.nama}</p>
        <p>Sekolah : {props.sekolah}</p>
      </div>
    )
  }

export function Tes2({mapel,nilai, color = 'grey',lulus = false}){
  return(
    <div style={{color: color}}>
      <p>nama Mapel : {mapel}</p>
      <p>nilai : {nilai}</p>

      <h3>{lulus ? "Selamat anda lulus" : "Mohon Maaf belum lulus"}</h3>
      <h2>{!lulus ? 'tidak' : 'lulus'}</h2>
    </div>
  )
}