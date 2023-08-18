import React from 'react'
import { Button } from 'react-bootstrap'
import { users } from '../data/users'

export const Table = () => {

    console.log(users)
    return (
        <div>
            <h2 className='mb-2 mt-3' >Tabela de Usuários</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Sobrenome</th>
                        <th scope="col">twitter</th>
                        <th scope="col">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td> <Button variant="link">Editar</Button>
                        <Button variant="link">Exlcuir</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td> <Button variant="link">Editar</Button>
                        <Button variant="link">Exlcuir</Button></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
