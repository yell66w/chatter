import React from "react";
import "./styles.scss";
const MessageBubble = () => {
  return (
    <div className="message-bubble">
      <div className="image-container">
        <img
          className="square-icon-small"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="profile"
        />
      </div>

      <div className="bubble-container">
        <h1>
          Ryan Tillaman <span className="bubble-date">11:58 AM</span>
        </h1>
        <div className="bubble-text-container">
          <div className="bubble-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            aliquid nam soluta? Excepturi at, nihil soluta nobis, neque, laborum
            animi iure sint magnam eos amet quis. Possimus cumque praesentium
            nostrum. Alias rem blanditiis, voluptatem exercitationem qui dolorem
            fuga facilis distinctio temporibus deserunt iure repellendus
            laboriosam reprehenderit impedit omnis, neque numquam fugiat aperiam
            illo veniam dolorum voluptates nobis? Ullam, quisquam atque. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Ipsum hic
            accusantium deserunt accusamus saepe nemo aut iure aliquam. Fuga
            quas eveniet in dicta aspernatur. Obcaecati magnam ipsam amet
            laboriosam sint? Et est enim consequuntur iusto cum voluptate hic
            ipsum id debitis repellendus voluptates nesciunt odit obcaecati
            alias distinctio commodi similique, harum esse maxime nulla fugiat
            accusamus. Cupiditate porro sapiente quis? Molestias aliquid et
            repudiandae doloribus, non saepe ea quia asperiores? Minus, quidem
            vitae excepturi totam, voluptate sequi, temporibus eligendi velit
            praesentium est corporis eum. Atque odit velit voluptates
            consequuntur eligendi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
