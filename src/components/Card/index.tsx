import { CardContainer, CardFooter } from "./styles";
import addCart from "../../assets/button-buy-card.svg";
import { Minus, Plus } from "phosphor-react";

interface IImageProps {
	image: string;
}

export function Card({ image }: IImageProps) {
	return (
		<CardContainer>
			<img className="coffeeImg" src={image} alt="" />
			<div>
				<p className="coffeeTag">TRADICIONAL</p>
				<p className="coffeeName">Expresso Tradicional</p>
				<p className="coffeeDescribe">O tradicional café feito com água quente e grãos moídos</p>
			</div>
			<CardFooter>
				<span className="coffeePrice">R$ 9,90</span>
				<div>
					<span className="coffeeQuantity">
						<span>
							<Minus size={14} />
						</span>
						<span>1</span>
						<span>
							<Plus size={14} />
						</span>
					</span>
					<span>
						<img src={addCart} alt="" />
					</span>
				</div>
			</CardFooter>
		</CardContainer>
	);
}
