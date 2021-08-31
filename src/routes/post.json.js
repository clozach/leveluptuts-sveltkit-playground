// More likely, you'll do something like:
//
// import db from db
//
// combined with…

export async function get({ params }) {
  // const data = db.collection.find(…)
  return {
    status: 200,
    body: {
      data: 'test' // data
    }
  }
}