import Layout from "../components/Layout";
import lady from "../images/lady.png"
import styles from "../styles/profile.module.css"



export default function Profile() {

    return (
        <Layout image={lady}>
        <div>
            <div>
                <div>
                    <h3>Set up your profile</h3>
                <p>Lets personalize your learning expirience!</p>
                    </div>
                <div>
                    <button>Age Group</button>
                    <button>Internet Type</button>
                    <button>Prefered Learning Style</button>
                    <button>Topics of Interst</button>
                </div>


            </div>
            <button>Skip</button>
            <button>Next</button>
        </div>

        </Layout>
    )
}
  