class TableHead extends React.Component {
	render() {
		return (
			<thead>
				<tr>
					<td>nazwa</td>
					<td>rodzaj</td>
					<td>alk</td>
					<td>producent</td>
					<td>butelka</td>
				</tr>
			</thead>
		)
	}
}

class TableBody extends React.Component {

	render() {
		return (
			<tbody>
			{this.props.beers.map( beer => 
				<tr>
					<td>{beer.name}</td>
					<td>{beer.art}</td>
					<td>{beer.alk}</td>
					<td>{beer.manufacturer}</td>
					<td><img src={beer.img}></img></td>
				</tr>
			)}
			</tbody>
		)
	}
}

class Table extends React.Component {

	beers = [
				{
					name: 'ciechan miodowe',
					art: 'jasne',
					alk: '5.7%',
					manufacturer: 'browar ciechan',
					img: 'images/ciechan-miodowe.png'
				},
				{
					name: 'łomża miodowe',
					art: 'jasne',
					alk: '5.7%',
					manufacturer: 'browar łomża',
					img: 'images/lomza-miodowe.png'
				},
				{
					name: 'perła miodowe',
					art: 'jasne',
					alk: '6%',
					manufacturer: 'browary lubuskie',
					img: 'images/perla-miodowa.png'
				}
			]

	render() {
		return (
			<table>
				<TableHead />
				<TableBody beers = {this.beers}/>
			</table>
		)
	}
}


class Title extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}

class App extends React.Component {

	render() {
		return (
			<div>
				<Title title = 'lista piw miodowych'/>
				<Table />
			</div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
)