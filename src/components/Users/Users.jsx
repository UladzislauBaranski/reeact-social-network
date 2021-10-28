import React from "react";
import s from "./User.module.css";
import * as axios from "axios";


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged=(page)=>{
        this.props.setPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        console.log('p', pages);
        return <div>

            <div>
                {
                    pages.map(p => {
                 return <span onClick={(e)=>{this.onPageChanged(p)}} className={this.props.currentPage === p && s.font}>{p+' '}</span>
                })}
            </div>

            {this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img className={s.img}
                         src={u.photos.small != null ? u.photos.small : 'https://softcatalog.info/ru/sites/default/files/styles/addthis/public/program/logo/adobe_photoshop-logo.png'}/>
                </div>
                <div>
                  {u.followed ? <button onClick={() => {
                          this.props.unfollow(u.id)
                      }}>Unfollow</button> :
                      <button onClick={() => {
                          this.props.follow(u.id)
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
}

export default Users;