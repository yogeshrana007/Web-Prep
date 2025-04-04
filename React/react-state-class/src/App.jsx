import "./App.css";
import Comment from "./Comment";
import CommentsForm from "./CommentForm.jsx";
import Counter from "./Counter.jsx";
import Form from "./Form.jsx";
import LikeButton from "./LikeButton.jsx";
import LotteryGame from "./LotteryGame.jsx";
import LudoBoard from "./LudoBoard.jsx";
import TodoList from "./TodoList.jsx";
function App() {
    return (
        <>
            <h1>States in React</h1>
            <Counter />
            <LikeButton />
            <LudoBoard />
            <TodoList />
            <LotteryGame n={3} winningSum={15} />
            <Form />
            <CommentsForm></CommentsForm>
            <Comment />
        </>
    );
}

export default App;
