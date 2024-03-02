import React from 'react'
import './following.css'
import { FaRegWindowClose } from 'react-icons/fa'
import user from "../../assets/images/profil.jpg";


const Following = ({ onFollowerModal }) => {

  return (
    <>
      <div className="content_following">
        <div className="container_following">
          <div className="title">
            <h3>Followers</h3>
            <FaRegWindowClose className='icon' onClick={onFollowerModal} />
          </div>
          <div className="input_search">
            <input type="search" placeholder='Recherche' />
          </div>
          <div className="follow_list">
            <div className="followingItem">
              <div className="nom_photo">
                <div className="photo">
                  <img src={user} />
                </div>
                <div className="nom_user">
                  <p >Bengybenjamin</p>
                  <p >Benjamin Ekia</p>
                </div>
              </div>
              <div>
                <button>Supprimer</button>
              </div>
            </div>
            <div className="followingItem">
              <div className="nom_photo">
                <div className="photo">
                  <img src={user} />
                </div>
                <div className="nom_user">
                  <p >Bengybenjamin</p>
                  <p >Benjamin Ekia</p>
                </div>
              </div>
              <div>
                <button>Supprimer</button>
              </div>
            </div>
            <div className="followingItem">
              <div className="nom_photo">
                <div className="photo">
                  <img src={user} />
                </div>
                <div className="nom_user">
                  <p >Bengybenjamin</p>
                  <p >Benjamin Ekia</p>
                </div>
              </div>
              <div>
                <button>Supprimer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default Following