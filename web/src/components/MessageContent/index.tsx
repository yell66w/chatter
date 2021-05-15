import MessageBubble from "@components/MessageBubble";
import React from "react";
import "./styles.scss";
export default function MessageContent() {
  const messageArray = [
    {
      _id: "01",
      name: "Ryan Tillaman",
      content: "First There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "11:58 AM",
    },
    {
      _id: "02",
      name: "Rosario Tillaman",
      content: "Second the motion There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:00 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },

    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },

    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "Third There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
    {
      _id: "03",
      name: "Nathalia Tillaman",
      content: "sd There",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: "12:09 PM",
    },
  ];
  return (
    <div className="message-content-container">
      {messageArray.map((item, index) => {
        return <MessageBubble key={item._id + index} data={item} />;
      })}
    </div>
  );
}
