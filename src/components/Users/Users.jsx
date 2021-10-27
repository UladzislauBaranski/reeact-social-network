import React from "react";
import * as axios from "axios";
import s from "./User.module.css";

let Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            })

/*        props.setUsers([{
            id: 1,
            fullName: 'Dmitry',
            photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F556666%2Fpexels-photo-556666.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fevening%2F&tbnid=Qq_w4Q00N8eJvM&vet=12ahUKEwjZ-tONxOrzAhVQ_KQKHbPQCd0QMygUegUIARDTAQ..i&docid=dsrNaZBsfbZXeM&w=500&h=625&q=photo&ved=2ahUKEwjZ-tONxOrzAhVQ_KQKHbPQCd0QMygUegUIARDTAQ',
            status: 'i am boss',
            followed: true,
            location: {city: 'Minsk', country: 'Belarus'}
        },
            {
                id: 2,
                fullName: 'Andrey',
                photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F556666%2Fpexels-photo-556666.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fevening%2F&tbnid=Qq_w4Q00N8eJvM&vet=12ahUKEwjZ-tONxOrzAhVQ_KQKHbPQCd0QMygUegUIARDTAQ..i&docid=dsrNaZBsfbZXeM&w=500&h=625&q=photo&ved=2ahUKEwjZ-tONxOrzAhVQ_KQKHbPQCd0QMygUegUIARDTAQ',
                status: 'i am boss',
                followed: false,
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                fullName: 'Vitya',
                photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F556666%2Fpexels-photo-556666.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fevening%2F&tbnid=Qq_w4Q00N8eJvM&vet=12ahUKEwjZ-tONxOrzAhVQ_KQKHbPQCd0QMygUegUIARDTAQ..i&docid=dsrNaZBsfbZXeM&w=500&h=625&q=photo&ved=2ahUKEwjZ-tONxOrzAhVQ_KQKHbPQCd0QMygUegUIARDTAQ',
                status: 'i am boss',
                followed: true,
                location: {city: 'Ukraine', country: 'Kiev'}
            },
            {
                id: 4,
                fullName: 'Vlad',
                photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F556666%2Fpexels-photo-556666.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fevening%2F&tbnid=Qq_w4Q00N8eJvM&vet=12ahUKEwjZ-tONxOrzAhVQ_KQKHbPQCd0QMygUegUIARDTAQ..i&docid=dsrNaZBsfbZXeM&w=500&h=625&q=photo&ved=2ahUKEwjZ-tONxOrzAhVQ_KQKHbPQCd0QMygUegUIARDTAQ',
                status: 'i am boss',
                followed: false,
                location: {city: 'Minsk', country: 'Belarus'}
            }
        ])*/
    }

    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img className={s.img} src={u.photos.small !=null ? u.photos.small: 'https://softcatalog.info/ru/sites/default/files/styles/addthis/public/program/logo/adobe_photoshop-logo.png'}/>
                </div>
                <div>
                  {u.followed ? <button onClick={() => {
                          props.unfollow(u.id)
                      }}>Unfollow</button> :
                      <button onClick={() => {
                          props.follow(u.id)
                      }}>Follow</button>}
                </div>
            </span>

                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                 <span>
                 {/*   <div>{u.location.country}</div>*/}
               {/*     <div>{u.location.city}</div>*/}
                </span>
            </span>
            </div>
        )}

    </div>
}
export default Users;