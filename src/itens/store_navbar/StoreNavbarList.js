import { Link } from "react-router-dom"

const StoreNavbarList = () => {
    return (
        <div>
            <ul>
                <li><Link>Mais Vendidos</Link></li>
                <li><Link>Barra de Proteína</Link></li>
                <li><Link>Whey Protein</Link></li>
                <li><Link>Creatina</Link></li>
                <li><Link>Energia</Link></li>
                <li><Link>Força</Link></li>
                <li><Link>Ganho de Massa</Link></li>
                <li><Link>COMBOS</Link></li>
            </ul>
        </div>
    )
}

export default StoreNavbarList