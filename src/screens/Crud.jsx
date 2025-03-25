import React, { useEffect, useState } from 'react'
import { Text, Center, Stack, TextInput, Button, Notification, Textarea, Card, Group, TypographyStylesProvider, Paper, Loader } from '@mantine/core';


function Crud() {

  const [getValueData, setGetValueData] = useState(null);
  const [valueId, setValueId] = useState(null);
  const [valueTitle, setValueTitle] = useState("");
  const [valueDescription, setValueDescription] = useState("");

  const [isCourse, setIsCourse] = useState(false)

    useEffect(() => {
      fetchGetData()
      }, [isCourse])

      const getAll = () => {
          setIsCourse(false)
          fetchGetData()
        }

        const postAll = () => {
          setValueId(null)
          setValueTitle('')
          setValueDescription('')
          setGetValueData(null)
          setIsCourse(true)
        }

        const submitPostAll = () => {
          fetchPostData()
          setIsCourse(false)
          

        }

    //////////////////Get///////////////
    
      const fetchGetData = async () => {
        const url = `http://localhost:8080/courses`;
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            credentials: 'include' // Include credentials if needed
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok in AnswerData');
          }
          const answerdata = await response.json();
          console.log("Answermypvideo++--**//", answerdata);
          setGetValueData(answerdata)
        } catch (error) {
          console.error('Error fetching AnswerData :', error);
        }
      };


      //////////////////Post///////////////

      const fetchPostData = async () => {
        const url = `http://localhost:8080/courses`;
        try {

          const obj = {};

          console.log("vvaaaaaaaall", valueId, valueTitle, valueDescription );

      obj.id = valueId
      obj.title = valueTitle
      obj.description = valueDescription

          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(obj),
            credentials: 'include' // Include credentials if needed
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok in AnswerData');
          }
          const answerPostdata = await response.json();
         // fetchGetData()
         getAll()
          console.log("post data++--**//", answerPostdata);
        } catch (error) {
          console.error('Error fetching AnswerData :', error);
        }
      };


    //   const fetchMyChatbotAllQuestionAnswerData = async () => {
    //     const url = `http://localhost:8080/courses`;
    //     try {
    //       const response = await fetch(url, {
    //         method: 'GET',
    //         // headers: {
    //         //   'Content-Type': 'application/json',
    //         //   // "Authorization": `Bearer ${user?.accessToken}`, // Uncomment this line if you need authorization
    //         //   'Accept': 'application/json'
    //         // }
    //       });
      
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok in AnswerData');
    //       }
    //       const answerdata = await response.json();
    //       console.log("Answermypvideo++--**//", answerdata);
    //     } catch (error) {
    //       console.error('Error fetching AnswerData :', error);
    //     }
    //   };


  return (
    <>

  <div >
    <Button onClick={getAll} style={{margin:"5px"}}>Get</Button>
    <Button onClick={postAll} style={{margin:"5px"}}>Create</Button>
    <Button style={{margin:"5px"}}>Update</Button>
    </div>

    {(isCourse == false) ? (
<>
    {getValueData?.map((item) => {
      return <div>
      <div style={{ marginTop: "0px" }}>
                  <Text style={{ fontWeight: "400", fontSize: "15px" }}>
                    {item?.id}
                  </Text>

                  <Text style={{ fontWeight: "400", fontSize: "15px" }}>
                    {item?.title}
                  </Text>

                  <Text style={{ fontWeight: "400", fontSize: "15px" }}>
                    {item?.description}
                  </Text>
                </div>
                <h6>
           ----------------------------
        </h6>
      </div>})}

</>  
    ) : (
      <Card>

      <TextInput
      leftSectionPointerEvents="none"
        label="Course Id"
        placeholder="Course Id"
      value={valueId}
      onChange={(event) => setValueId(event.currentTarget.value)}
    />

<TextInput
leftSectionPointerEvents="none"
        label="Course Title"
        placeholder="Course Title"
      value={valueTitle}
      onChange={(event) => setValueTitle(event.currentTarget.value)}
    />

<TextInput
leftSectionPointerEvents="none"
        label="Course Description"
        placeholder="Course Description"
      value={valueDescription}
      onChange={(event) => setValueDescription(event.currentTarget.value)}
    />

    <Button onClick={submitPostAll}>Submit</Button>
      </Card>
    )}    

    </>
  )
}

export default Crud







// import React from 'react'

// function Crud() {
//   return (
//     <div>Crud</div>
//   )
// }

// export default Crud