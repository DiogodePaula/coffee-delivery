import { Banner, BannerImage, CoffeeTypesContainer, HomeContainer, IconAndText } from "./styles";
import imgHome from "../../assets/home-presentation.png";
import purchase from "../../assets/banner-home/purchase.svg";
import delivery from "../../assets/banner-home/delivery.svg";
import coffee from "../../assets/banner-home/coffee.svg";
import packaging from "../../assets/banner-home/packaging.svg";
import { Card } from "../../components/Card";

export function Home() {
	return (
		<HomeContainer>
			<Banner>
				<div>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
					<article>
						<IconAndText>
							<div>
								<img src={purchase} alt="" />
								<span>Compra simples e segura</span>
							</div>
							<div>
								<img src={delivery} alt="" />
								<span>Compra simples e segura</span>
							</div>
						</IconAndText>
						<IconAndText>
							<div>
								<img src={coffee} alt="" />
								<span>Compra simples e segura</span>
							</div>
							<div>
								<img src={packaging} alt="" />
								<span>Compra simples e segura</span>
							</div>
						</IconAndText>
					</article>
				</div>
				<BannerImage src={imgHome} alt="Copo de cafe" />
			</Banner>
			<div>
				<h1>Nossos cafés</h1>
				<CoffeeTypesContainer>
					<Card />
				</CoffeeTypesContainer>
			</div>
		</HomeContainer>
	);
}
