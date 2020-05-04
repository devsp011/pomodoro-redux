import React, { useState } from 'react'
import styled from 'styled-components'
import InputAdd from '../../../components/InputAdd'
import ItemList from './ItemList'


function ToDoList() {

    const [newTask, setNewTask] = useState('')

    const onChange = event => setNewTask(event.target.value)

    const onClickAdd = () => {
        console.log(newTask)
    }

    return (
        <Container>
            <InputAdd placeholder='Nova Tarefa: ' value={newTask} onChange={onChange} onClickAdd={onClickAdd} />
          
            <ItemList indicatorPomodoro='#1' text='Criar um arquivo no figma 1' checked={true} />
            <ItemList indicatorPomodoro='#1' text='Criar um arquivo no figma 2' checked={false} />
            <ItemList indicatorPomodoro='#1' text='Criar um arquivo no figma 3' checked={false} />
            <ItemList indicatorPomodoro='#1' text='Criar um arquivo no figma 4' checked={true} />
        </Container>
    )
}

const Container = styled.div`
    margin: 12px 24px;
    height: calc(100% - 216px);
`

export default ToDoList