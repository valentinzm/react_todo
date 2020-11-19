import './App.css';

const Todo = ( props ) => {
    let classes = ['card-text']
    if(props.todo.completed){
        classes.push('done')
    }
    return(
        <div className="card mb-3 checked-true">
        <div className="card-body">
            <p className={classes.join(' ')}>{props.todo.title}</p>
            <button className="btn btn-primary mr-2" onClick={ (id) => props.completed(props.todo.id) }>Отметить</button>
            <button className="btn btn-danger" onClick={ (id) => props.removed(props.todo.id) }>Удалить</button>
        </div>
        </div>
    )
}

export default Todo;