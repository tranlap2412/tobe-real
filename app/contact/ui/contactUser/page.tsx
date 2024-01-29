import './style.css'
function ContactUser() {
    return ( 
        <form method="post" className="form_group">
            <div className="p-3">
                <label htmlFor="name" className="form_control">Referrer Name</label>
                <input className="text" type="text" id="name" placeholder="Name" />
            </div>
            <div className="p-3">
                <label htmlFor="email" className="form_control">Referrer Email</label>
                <input className="text" type="text" id="email" placeholder="Email" />
            </div>
            <div className="p-3">
                <label htmlFor="phone" className="form_control">Referrer Phone</label>
                <input className="text" type="text" id="phone" placeholder="Phone" />
            </div>
        </form>
     );
}

export default ContactUser;