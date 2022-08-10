<script>
// @ts-nocheck

import { prevent_default } from "svelte/internal";
import {addDoc, collection, doc, onSnapshot, deleteDoc, updateDoc} from "firebase/firestore";
import { db } from "../firebase.js";
import { onDestroy } from "svelte";

let task = {
    title: "",
    description: "",
}

let tasks = []
let editStatus = false
let currentId = "";


const unsub = onSnapshot(
    collection(db, "tasks"),
    (querySnapshot) => {
      tasks = querySnapshot.docs.map(doc =>{
            return {...doc.data(), id:doc.id}
        })
        // console.log(tasks)
    },
    (err) => {
        console.log(err)
    }
)

onDestroy(unsub)

const deleteTask = async (id) => {
    try {
        //confirmation alert?
      await deleteDoc(doc(db, "tasks", id));
    } catch (error) {
      console.error(error);
    }
  };

  const editTask = currenttask => {
    task.title = currenttask.title
    task.description = currenttask.description
    currentId = currenttask.id
    editStatus = true

  };

  const addTask = async () => {
    try {
        await addDoc(collection(db,'tasks'), {...task, createdAt: Date.now(),});
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async () => {
    try {
        await updateDoc(doc(db,'tasks', currentId), task);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
        if (!editStatus) {
            addTask()
            
            console.log("Updating task")
        } else {
            updateTask()
        }
    } catch (error) {
        console.log(error)
    }

    let task = {
    title: "",
    description: "",
    }
    editStatus = false
    currentId = "";

}
const onCancel = () => {
    editStatus = false;
    currentId = "";
    task = { title: "", description: "" };
  };

</script>

<form on:submit|preventDefault={handleSubmit}>
<input type="title" id="title" placeholder="Enter Title" bind:value={task.title}>
<input type="description" id="description" placeholder="Enter Description" bind:value={task.description}>
<button>Save</button>
</form>
<!-- 
<button disabled={!task.title}><i>save</i>{#if !editStatus}Save{:else}Update{/if}</button> -->
  {#if editStatus}
    <button on:click={onCancel}>Cancel</button>
  {/if}

<!-- {JSON.stringify(tasks)} -->

{#each tasks as task}
    <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <button on:click={deleteTask(task.id)}>Delete</button>
        <button on:click={editTask(task)}>Edit</button>
    </div>

    
{/each}