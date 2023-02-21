import React from 'react'


const Register = () => {

    return(
        <div className='register-container'>
              <div className='register-box'>
                  <div className='register-head'>
                       <h1>Inregistrare Utilizator</h1>
                       <p>Toate campurile sunt obligatorii !</p>
                  </div>
                  <div className='register-section1' >
                       <span className='input-username'>
                             <input name='username' type='text' placeholder='Nume Utilizator'
                               autoComplete='off'/>
                       </span>

                       <span class='input-email'>
                            <input name='email' type='email' placeholder='Adresa de Mail'
                                autoComplete='off'/>
                       </span>

                       <span className='input-password'>
                            <input name='password' type='password' placeholder='Parola'
                                autoComplete='off'/>
                       </span>

                       <span className='input-confirmPassword'>
                             <input name='confirmPassword' type='password' placeholder='Confirmare Parola'
                                 autoComplete='off'/>
                       </span>

                       <span className='input-bornDate'>
                             <input name='bornDate' type='text' placeholder='Data Nasterii'
                                  autoComplete='off'/>
                       </span>
                  </div>

                  <div className='section-input2'>
                       <span className='checkBox'>
                            <input type='checkbox' name='terms' />
                            <label>Accept
                                  <a href='#'>termenii si conditiile</a>
                                    impuse de conducerea site-ului ! 
                            </label>
                       </span>
                       <button type='submit'>Inregistrare</button>
                  </div>
              </div>
              <span className='register-footer'>
                      <p>In cazul in care esti inregistrat deja , te invit sa apesi
                           <a href='/login'> aici ! </a>
                      </p>
                      </span>
            </div>
        )
    
}

export default Register
