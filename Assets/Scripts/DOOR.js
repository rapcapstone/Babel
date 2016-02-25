var doorClip : AnimationClip;
var Key : GameObject;

private var Range = false;
private var State = 0;  //open = 1, close = 0

function Start () 
{

}

function Update () 
{
	if (Input.GetKeyDown(KeyCode.E) && Range == true && Key.active == false && State == 0)
	{
	    GameObject.Find("Door_A").GetComponent.<Animation>().Play("DoorOpen");
        State = 1;
	}
    else if(Input.GetKeyDown(KeyCode.E) && Range == true && Key.active == false && State == 1)
    {
        GameObject.Find("Door_A").GetComponent.<Animation>().Play("DoorClose");
        State = 0;
    }
}

function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		Range = true;
	}
}

function OnTriggerExit (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		Range = false;
	}
}