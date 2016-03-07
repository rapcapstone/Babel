using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class EnemyController : MonoBehaviour {

	public float viewRadius;
	[Range(0,360)]
	public float viewAngle;

	public LayerMask targetMask;
	public LayerMask obstacleMask;

	[HideInInspector]
	public List<Transform> visibleTargets = new List<Transform>();

	public Animator animator;

	Vector3 lastPosition = new Vector3();

	void Start() {
		animator = GetComponent<Animator> ();
		StartCoroutine ("FindTargetsWithDelay", 0f);
	}

	void Update() {
		// prevents character from wobbling on startup
		if (visibleTargets.Count == 0 && !lastPosition.Equals(new Vector3(0,0,0))) {
			lastPosition.y = 0;
			PursueTarget (lastPosition);
		}
	}

	IEnumerator FindTargetsWithDelay(float delay){
		while (true) {
			yield return new WaitForSeconds (delay);
			FindVisibleTargets ();
		}
	}

	void FindVisibleTargets() {
		visibleTargets.Clear ();
		Collider[] targetsInViewRadius = Physics.OverlapSphere (transform.position, viewRadius, targetMask);

		for (int i = 0; i < targetsInViewRadius.Length; i++) {
			Transform target = targetsInViewRadius [i].transform;
			Vector3 dirToTarget = (target.position - transform.position).normalized;
			if (Vector3.Angle(transform.forward, dirToTarget) < viewAngle / 2){
				float dstToTarget = Vector3.Distance (transform.position, target.position);

				if (!Physics.Raycast (transform.position, dirToTarget, dstToTarget, obstacleMask)) {
					lastPosition = target.position;
					lastPosition.y = 0;
					PursueTarget (lastPosition);
					visibleTargets.Add (target);
				}
			}
		}
	}

	void PursueTarget (Vector3 destination){
		animator.SetBool ("Pursue", true);
		//face player
		transform.rotation = Quaternion.Slerp (transform.rotation, Quaternion.LookRotation(destination - transform.position), 20 * Time.deltaTime);
		//move twoards player
		transform.position += transform.forward * 4 * Time.deltaTime;

		if (Vector3.Distance (destination, transform.position) < 0.2f) {
			animator.SetBool ("Pursue", false);
			lastPosition.Set (0, 0, 0);
		}
	}

	public Vector3 DirFromAngle(float angleInDegrees, bool angleIsGlobal){
		if (!angleIsGlobal) {
			angleInDegrees += transform.eulerAngles.y;
		}
		return new Vector3 (Mathf.Sin (angleInDegrees * Mathf.Deg2Rad), 0, Mathf.Cos (angleInDegrees * Mathf.Deg2Rad));
	}
}
