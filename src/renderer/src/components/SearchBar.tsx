export default ({value,onChange}:any)=><input className='border p-2 rounded w-full' placeholder='Pesquisar username ou comentário' value={value} onChange={e=>onChange(e.target.value)}/>
