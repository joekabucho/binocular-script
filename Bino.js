#pragma strict

var zoom : int = 20;
var normal : int = 60;
var smooth : float = 5;

var imageBino : GUITexture;
private var isZoomed = false;

function Start () 
{
imageBino.enabled = false;
}

function Update () 
{
	if(Input.GetMouseButtonDown(1))
	{
		isZoomed = !isZoomed;
	}
	
	if(isZoomed == true)
	{
		camera.fieldOfView = Mathf.Lerp(camera.fieldOfView, zoom, Time.deltaTime * smooth);
		imageBino.enabled = true;
	}
	
	else
	{
		camera.fieldOfView = Mathf.Lerp(camera.fieldOfView, normal, Time.deltaTime * smooth);
		imageBino.enabled = false;
	}
}
