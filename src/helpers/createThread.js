import { firestore } from 'firebase/app'

export const createThread = async input => {
  const now = firestore.Timestamp.now()
  const systemFields = {
    createdAt: now,
    updatedAt: now
  }

  const threadRef = firestore().collection('threads').doc()

  await threadRef.set({
    ...systemFields,
    title: input.title,
    responseCount: 1
  })

  const responseRef = threadRef.collection('response').doc()
  console.log(threadRef);
  console.log(responseRef);
  

  await responseRef.set({
    ...systemFields,
    threadId: threadRef.id,
    userName: input.userName,
    text: input.text,
    index: 0
  })
}