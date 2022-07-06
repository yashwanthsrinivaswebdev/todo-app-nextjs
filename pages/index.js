import Head from "next/head";
import Image from "next/image";
import ToDoList from "../components/ToDoList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ToDo app</title>
        <meta
          name="keyword"
          content="todo app, productivity, reminder, office"
        />
      </Head>
      <ToDoList />
      <a
        href="https://www.pexels.com/photo/milky-way-galaxy-during-nighttime-1252890/"
        style={{
          color: "white",
          position: "relative",
          top: "-530px",
          left: "1040px",
        }}>
        Image credits
      </a>
    </div>
  );
}
