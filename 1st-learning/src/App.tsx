import Button from "./components/Button.tsx";

function App(){
    return (
        <div>
            <Button
                label="CLick"
                disabled={false}
            onClick={() => console.log('CLick')}
            />
        </div>
    )
}

export default App;