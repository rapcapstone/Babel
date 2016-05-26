var magicScript : GameObject;
var ghoul : GameObject;


function Start () {
	ghoul.SetActive(false);
}
function OnTriggerEnter (theCollider : Collider)
{
	if (magicScript.GetComponent("magicscript").magicEnabled)
	{
		ghoul.SetActive(true);
	}
}