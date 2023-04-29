import Header from "../../components/header/Header";
import Toolbar from "../../components/Toolbar/toolbar";
function Profile() {
  return (
    <>
      <Header/>
      <body class="profile-body">
        <h1>Esto es Profile</h1>
        <div>
          <img class="profile-pic" src="/assets/img/profile pic.png" alt="Descripción de la imagen"></img>
        </div>
      </body>

      <Toolbar />
    </>
  );
}

export default Profile;