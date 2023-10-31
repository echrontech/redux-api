import { useGetAllQuery, useGetByIdQuery, useDeleteByIdMutation, usePostAddMutation, usePutUpdateMutation } from './services/testapi'
function Apicall() {
  const getRes = useGetAllQuery()
  const getIdRes = useGetByIdQuery(5)
  const [deleteId, delIdRes] = useDeleteByIdMutation()
  const [postAdd, postRes] = usePostAddMutation()
  const [putUpt, putRes] = usePutUpdateMutation()

  const postInsert = {
    title: "saleem title",
    body: "saleem body",
    userId: 25,
  }

  const putInsert = {
    id: 3,
    title: "saleem title",
    body: "saleem body",
    userId: 55,
  }

  console.log("Delete Res", delIdRes)
  console.log("Post Res", postRes)
  console.log("Put Res", putRes)
  let singleView = ''
  if(getIdRes.isSuccess) {
    singleView = <div><h2>{getIdRes.data.title}</h2><p>{getIdRes.data.body}</p><hr /></div>
  }
  //const {data, isError, isLoading, isSuccess} = useGetAllPostQuery()
  if(getRes.isLoading) return <div>Loading...</div>
  if(getRes.isError) return <h1>An Error occured {getRes.error.error}</h1>
  if(getRes.isSuccess) {
    return (
      <>
        <h1>Saleem Api</h1>
        <button onClick={()=>{postAdd(postInsert)}}>Post Add</button>
        {singleView}
        {
          getRes.data.map((post)=>
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={()=>{putUpt(putInsert)}}>update</button>
            <button onClick={()=>{deleteId(post.id)}}>Delete</button>
            <hr />
          </div>
          )
        }
      </>
    )
  }
}

export default Apicall;