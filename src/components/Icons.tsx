import styled from 'styled-components'
import React from 'react'
import { lightRed } from '../utils/colors'
import { Link } from 'react-router-dom'

const Svg = styled.svg`
    width: 20px;
    height: 20px;
    stroke: white;
    fill:${lightRed}
`
const Svg2 = styled.svg`
align-self: center;
fill: transparent;
stroke-width: 1.2px;
stroke: rgb(68 68 68);
`


export const CartIcon = () => (

  <Svg viewBox="0 0 16 16" width="24"
    height="24" >

    <rect x=".5" y="4.5" width="15" height="11" rx=".5"></rect><path d="M4.5 4.287C4.5 2.162 6.1.5 8 .5s3.5 1.662 3.5 3.787V4.5h-7v-.213zM4 5h1v3H4zM11 5h1v3h-1z"></path></Svg>
)

export const CartIcon2 = () => (

  <svg viewBox="0 0 16 16" width="20"
    height="20 " fill="black" stroke="white">

    <rect x=".5" y="4.5" width="15" height="11" rx=".5"></rect><path d="M4.5 4.287C4.5 2.162 6.1.5 8 .5s3.5 1.662 3.5 3.787V4.5h-7v-.213zM4 5h1v3H4zM11 5h1v3h-1z"></path></svg>
)


export const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="28"
    height="28"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    shapeRendering="geometricPrecision"

  >
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
)


export const NavButtonIcon = () => (
  <Svg viewBox="0 0 16 13">

    <path
      d="M0 0h16v1H0zM0 6h16v1H0zM0 12h16v1H0z"></path>

  </Svg>
)
export const SearchIcon = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="8"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <title>arrow down</title>
    <use fill="#FFF" xlinkHref="#menuSearch" transform="translate(1 1)" />
    <defs>
      <path
        id="menuSearch"
        d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"
      />
    </defs>
  </Svg>
)


export const SearchIcon2 = () => (
  <Svg2 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M13.187 16.974A7.158 7.158 0 1 0 7.587 3.8a7.158 7.158 0 0 0 5.6 13.174z" data-fill="1" data-stroke="1" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.448 15.448L20.999 21" data-stroke="1" strokeLinecap="round" strokeLinejoin="round"></path></Svg2>
)


export const FoldIcon = () => (
  <svg viewBox="0 0 24 24" width="20"
    height="20" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 7L12 17 2 7" data-stroke="1" strokeLinecap="round" strokeLinejoin="round"></path></svg>
)

export const AccountIcon = () => (
	<svg  width ="45px"
    height ="45px"
    fill ="#242222" viewBox="0 0 20 20">

<path fillRule="evenodd" clipRule="evenodd" d="M12.117 9.395a4 4 0 10-4.234 0C5.278 10.4 3.333 13.245 3.039 17c-.026.327-.039.66-.039 1h14c0-.34-.013-.673-.039-1-.294-3.754-2.24-6.6-4.844-7.605zM13 6a3 3 0 11-6 0 3 3 0 016 0zm-3 4c-2.895 0-5.597 2.665-5.959 7h11.918c-.362-4.335-3.064-7-5.959-7z"></path></svg>

)
export const FoldIcon2 = () => (
  <svg viewBox="0 0 24 24" width="16" fill={lightRed}
    height="16" stroke="white" xmlns="http://www.w3.org/2000/svg"><path d="M22 7L12 17 2 7" data-stroke="1" strokeLinecap="round" strokeLinejoin="round"></path></svg>
)

export const EmptyCart = () => (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="243.333px" viewBox="0 0 512 243.333" enableBackground="new 0 0 512 243.333" xmlSpace="preserve">
<g>
	<g>
		<g>
			<g>
					<path fill="none" stroke="#B6C8E1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
					M276.33,116.458l84.26,4.944c0.399,0.022,0.663,0.424,0.527,0.8l-4.438,12.279l-8.451,23.385l-60.466,10.494l-15.523-67.91
					c-0.272-1.286-1.302-2.277-2.598-2.5l-15.435-3.409"/>
				
					<line fill="none" stroke="#B6C8E1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="352.282" y1="120.87" x2="341.264" y2="159.075"/>
				
					<line fill="none" stroke="#B6C8E1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="343.138" y1="120.288" x2="334.361" y2="160.272"/>
				
					<line fill="none" stroke="#B6C8E1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="333.959" y1="119.704" x2="327.523" y2="161.458"/>
				
					<line fill="none" stroke="#B6C8E1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="324.744" y1="119.118" x2="320.746" y2="162.635"/>
				
					<line fill="none" stroke="#B6C8E1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="315.494" y1="118.53" x2="314.03" y2="163.801"/>
				
					<line fill="none" stroke="#B6C8E1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="306.207" y1="117.94" x2="307.376" y2="164.956"/>
				
					<line fill="none" stroke="#B6C8E1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="296.884" y1="117.347" x2="300.78" y2="166.1"/>
				
					<line fill="none" stroke="#B6C8E1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="284.321" y1="116.752" x2="294.242" y2="167.235"/>
			</g>
			
				<line fill="none" stroke="#B6C8E1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="280.379" y1="132.138" x2="356.68" y2="134.481"/>
			
				<line fill="none" stroke="#B6C8E1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="284.424" y1="152.559" x2="352.282" y2="147.566"/>
			<path fill="none" stroke="#B6C8E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
				M287.763,168.36l-6.453,17.448c-0.534,1.104,0.27,2.386,1.495,2.386h56.063"/>
			<g>
				
					<linearGradient id="SVGID_1_" gradientUnits="useSpaceOnUse" x1="-1174.5166" y1="192.5815" x2="-1165.2373" y2="192.5815" gradientTransform="matrix(-1 0 0 1 -831.3184 0)">
					<stop  offset="0" style="stop-color:#343A44"/>
					<stop  offset="0.3009" style="stop-color:#232D3E"/>
					<stop  offset="0.6391" style="stop-color:#182439"/>
					<stop  offset="1" style="stop-color:#142138"/>
				</linearGradient>
				<circle fill="url(#SVGID_1_)" cx="338.559" cy="192.582" r="4.64"/>
				
					<linearGradient id="SVGID_2_" gradientUnits="useSpaceOnUse" x1="-1172.0498" y1="192.5815" x2="-1167.7031" y2="192.5815" gradientTransform="matrix(-1 0 0 1 -831.3184 0)">
					<stop  offset="0" style="stop-color:#EEF4FB"/>
					<stop  offset="0.3115" style="stop-color:#E3EDF8"/>
					<stop  offset="1" style="stop-color:#CFE1F3"/>
				</linearGradient>
				<circle fill="url(#SVGID_2_)" cx="338.558" cy="192.582" r="2.173"/>
			</g>
			<path fill="#B6C8E1" d="M338.558,193.7L338.558,193.7c1.271,0,2.384-0.852,2.715-2.078l1.127-4.179h-7.682l1.128,4.179
				C336.177,192.848,337.288,193.7,338.558,193.7z"/>
			<g>
				
					<linearGradient id="SVGID_3_" gradientUnits="useSpaceOnUse" x1="-1127.6846" y1="192.5815" x2="-1118.4043" y2="192.5815" gradientTransform="matrix(-1 0 0 1 -831.3184 0)">
					<stop  offset="0" style="stop-color:#343A44"/>
					<stop  offset="0.3009" style="stop-color:#232D3E"/>
					<stop  offset="0.6391" style="stop-color:#182439"/>
					<stop  offset="1" style="stop-color:#142138"/>
				</linearGradient>
				<circle fill="url(#SVGID_3_)" cx="291.726" cy="192.582" r="4.64"/>
				
					<linearGradient id="SVGID_4_" gradientUnits="useSpaceOnUse" x1="-1125.2178" y1="192.5815" x2="-1120.8711" y2="192.5815" gradientTransform="matrix(-1 0 0 1 -831.3184 0)">
					<stop  offset="0" style="stop-color:#EEF4FB"/>
					<stop  offset="0.3115" style="stop-color:#E3EDF8"/>
					<stop  offset="1" style="stop-color:#CFE1F3"/>
				</linearGradient>
				<circle fill="url(#SVGID_4_)" cx="291.726" cy="192.582" r="2.173"/>
			</g>
			<path fill="#B6C8E1" d="M291.726,193.7L291.726,193.7c1.271,0,2.383-0.852,2.714-2.078l1.127-4.179h-7.681l1.128,4.179
				C289.344,192.848,290.456,193.7,291.726,193.7z"/>
			
				<polyline fill="none" stroke="#B6C8E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="
				286.885,172.491 344.169,161.458 348.229,157.866 			"/>
			<path fill="#B6C8E1" d="M251.538,96.495l11.419,1.524c0.437,0.059,0.835-0.247,0.894-0.683l0.251-1.884
				c0.059-0.435-0.247-0.834-0.682-0.893l-11.419-1.525c-0.436-0.059-0.835,0.248-0.893,0.682l-0.253,1.884
				C250.798,96.037,251.104,96.436,251.538,96.495z"/>
		</g>
	</g>
	
		<line fill="none" stroke="#CCCCCC" strokeWidth="0.75" strokeMiterlimit="10" x1="22.353" y1="196.398" x2="488.798" y2="196.398"/>
	<g>
		<g>
			<polygon fill="#0F2C3D" points="155.403,172.405 143.539,179.117 148.415,190.398 150.267,182.406 158.021,178.375 			"/>
			<path fill="#0F2C3D" d="M199.93,116.991c-0.961,3.684-0.223,34.052-0.399,36.747c-0.177,2.696-46.742,28.784-46.742,28.784
				l-2.792-7.662l32.969-29.698c0,0-9.739-30.171-5.188-36.444s10.023-7.61,10.023-7.61L199.93,116.991z"/>
		</g>
		<g>
			<polygon fill="#133A50" points="225.743,183.887 230.471,196.955 241.993,195.937 234.48,191.504 232.264,182.218 			"/>
			<path fill="#133A50" d="M177.908,102.889c0,0-1.982,4.861-0.735,10.069c2.897,12.092,36.068,28.51,36.068,28.51
				s2.633,13.956,5.253,23.481c2.622,9.524,7.708,24.141,7.708,24.141l7.857-2.79c0,0-5-47.555-4.987-51.999
				c0.015-4.444-22.481-24.686-27.177-28.244C197.199,102.499,177.908,102.889,177.908,102.889z"/>
		</g>
		<path fill="#FEC4AD" d="M233.859,40.588c-0.604,2.473-0.935,4.788-1.625,6.36s0.392,4.304,0.951,5.514
			c0.56,1.208-2.259,1.392-2.259,1.392s-1.501,1.613-3.09,4.729c-0.707,1.387-3.314,0.191-5.016-0.077
			c-1.7-0.268-2.681-2.084-5.014-4.452c-2.332-2.368-3.547-6.704-3.547-6.704l0.97-9.487l10.473-2.604L233.859,40.588z"/>
		<path fill="#471A16" d="M233.472,42.296c0,0,2.987-2.809-1.589-6.743c-3.447-2.964-9.814-4.796-13.577-3.947
			c-3.814,0.86-4.797,3.152-4.307,3.543c0,0-2.291,0.92-3.635,5.271s4.025,12.411,4.008,14.761l4.199-4.678
			c0,0-2.737-2.463-2.057-5.055s4.43-3.166,4.613-0.606c0.183,2.559-0.221,3.809-0.221,3.809s3.02-2.332,2.313-3.878
			c-1.318-2.886,1.354-2.916,4.368-2.292C229.774,42.934,230.625,42.167,233.472,42.296z"/>
		<path fill="#FEC4AD" d="M218.079,49.507c0,0-5.543,6.161-6.476,7.07c-0.931,0.909-8.654,0.08-8.654,0.08
			s-5.216,7.725,1.985,11.418c7.2,3.693,16.03,2.423,16.03,2.423s0.851-6.574,0.678-8.374c-0.173-1.8,2.18-5.66,2.18-5.66
			L218.079,49.507z"/>
		<path fill="#ED3365" d="M204.609,53.984l8.016-0.147l6.729,12l2.288-3.712l1.254,5.419c0,0-6.135,15.627-10.36,26.239
			c-3.358,8.432-5.269,14.355-5.269,14.355s-6.838,3.555-13.979,3.565s-16.646-2.634-18.474-5.931
			c-1.827-3.296,12.866-29.273,16.185-36.291S204.609,53.984,204.609,53.984z"/>
		<g>
			<path fill="#FEC4AD" d="M256.906,94.343c0,0,6.125-1.879,7.513-1.604c1.389,0.274,5.2,2.886,5.2,2.886l-0.564,0.447l-1.197,0.256
				l0.874,0.548l-0.791,0.885l-0.979-0.262l-1.289,0.03l1.713,0.776l-0.813,0.663l-1.558-0.583l0.07,1.309l-0.664,0.143
				l-1.116-1.557l-2.402,0.432l-2.846-1.191l-3.29,1.034L256.906,94.343z"/>
			<path fill="#ED3365" d="M210.767,57.299c6.401,5.929,16.515,23.72,20.411,25.781c12.786,6.764,25.729,11.263,25.729,11.263
				l-2.14,4.211c0,0-24.233-4.48-28.509-6.923c-10.55-6.027-18.205-13-22.199-23.718C201.384,60.735,207.256,54.047,210.767,57.299z
				"/>
		</g>
	</g>
</g>
<circle fill="none" stroke="#B6C8E1" strokeWidth="2" strokeMiterlimit="10" cx="319.114" cy="92.667" r="16.188"/>
<text transform="matrix(1.0908 0 0 1 315.2383 101.7349)" fill="#B6C8E1" fontFamily="'MyriadPro-Regular'" fontSize="30.9005">!</text>
</svg>

)

export const Logo = () => (<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="24" stroke="white" fill="white" x="0px" y="0px"
  viewBox="0 0 251.479 251.479"  xmlSpace="preserve">
  <g>
    <path d="M209.355,135.551c-4.143,0-7.5,3.358-7.5,7.5v76.109H49.634v-76.109c0-4.142-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.358-7.5,7.5
   v83.609c0,4.142,3.357,7.5,7.5,7.5h167.221c4.143,0,7.5-3.358,7.5-7.5v-83.609C216.855,138.909,213.497,135.551,209.355,135.551z"
    />
    <path d="M249.282,137.748L131.035,19.515c-2.928-2.929-7.677-2.928-10.606,0L2.197,137.748c-2.929,2.929-2.929,7.678,0,10.606
   c1.465,1.464,3.385,2.197,5.304,2.197c1.92,0,3.839-0.732,5.304-2.197l112.929-112.93l112.943,112.93
   c2.928,2.929,7.677,2.928,10.607-0.001C252.211,145.425,252.211,140.676,249.282,137.748z"/>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
</svg>
)