import React, { useState } from 'react'
import './TodoList.css'
import Icone from './assets/icon.webp'

function TodoList() {
  const [lista, setLista] = useState([])
  const [novoItem, setNovoItem] = useState('')

  function adicionaItem() {
    if (!novoItem) {
      return
    }
    setLista([...lista, { text: novoItem, isCompleted: false }])
    setNovoItem('')
    document.getElementById('input-entrada').focus()
  }

  function clicou(index) {
    const listaAux = [...lista]
    listaAux[index].isCompleted = !listaAux[index].isCompleted
    setLista(listaAux)
  }

  function deleta(index) {
    const listaAux = [...lista]
    listaAux.splice(index, 1)
    setLista(listaAux)
  }
  function deletaTudo() {
    setLista([])
  }
  return (
    <>
      <div>
        <h1>Lista de Tarefas</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            adicionaItem()
          }}
        >
          <input
            type="text"
            id="input-entrada"
            onChange={(e) => {
              setNovoItem(e.target.value)
            }}
            value={novoItem}
            placeholder="Adicione uma tarefa"
          />
          <button className="add" type="submit">
            Add
          </button>
        </form>
      </div>
      <div className="listaTarefas">
        <div style={{ textAlign: 'center' }}>
          {lista.length < 1 ? (
            <img className="icone-central" src={Icone} />
          ) : (
            lista.map((item, index) => (
              <div
                key={index}
                className={item.isCompleted ? 'item completo' : 'item'}
              >
                <span
                  onClick={() => {
                    clicou(index)
                  }}
                >
                  {item.text}
                </span>
                <button
                  onClick={() => {
                    deleta(index)
                  }}
                  className="del"
                >
                  {' '}
                  Deletar{' '}
                </button>
              </div>
            ))
          )}
          {lista.length > 0 && (
            <button
              onClick={() => {
                deletaTudo()
              }}
              className="deleteAll"
            >
              Deletar Todas
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default TodoList
