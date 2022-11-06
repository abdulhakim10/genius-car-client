import React, { useEffect, useState } from 'react';

const OrderRow = ({order, handleDelete}) => {
    const {_id, serviceName, customer, message, phone, price, service} = order;
    const [serviceOrder, setServiceOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
        .then(res => res.json())
        .then(data => setServiceOrder(data))
    },[service])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            { serviceOrder?.img &&
                                <img src={serviceOrder.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
               {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>{message}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default OrderRow;