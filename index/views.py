from django.shortcuts import render
from django.shortcuts import HttpResponse
from .models import service,download,notice,client,associate,query
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
@csrf_exempt
def service_types(request):
	kind=request.GET.get('type',-1)
	arr=[]
	if kind==-1:
		services=service.objects.all()
	else:
		services=service.objects.filter(kind=kind)

	if len(services) ==0:
		return HttpResponse('0')
	for i in range(0,len(services)):
		ser={}
		ser['name']=services[i].name
		ser['content']=services[i].desc
		ser['url']=services[i].photo.url
		arr.append(ser)

	return HttpResponse(json.dumps(arr))

@csrf_exempt
def download_types(request):

	arr=[]
	
	dl=download.objects.all()

	if len(dl) ==0:
		return HttpResponse('0')
	for i in range(0,len(dl)):
		ser={}
		ser['name']=dl[i].name
		ser['content']=dl[i].desc
		ser['url']=dl[i].file.url
		ser['type']=dl[i].kind

		arr.append(ser)

	return HttpResponse(json.dumps(arr))

@csrf_exempt
def notices(request):

	arr=[]
	
	note=notice.objects.all()

	if len(note) ==0:
		return HttpResponse('0')
	for i in range(0,len(note)):
		ser={}
		ser['head']=note[i].head
		ser['content']=note[i].content
		ser['url']=note[i].url

		arr.append(ser)

	return HttpResponse(json.dumps(arr))

@csrf_exempt
def clients(request):

	arr=[]
	
	cli=client.objects.all()

	if len(cli) ==0:
		return HttpResponse('0')
	for i in range(0,len(cli)):
		ser={}
		ser['logo']=cli[i].logo.url
		ser['color']=cli[i].color
		ser['url']=cli[i].url

		arr.append(ser)

	return HttpResponse(json.dumps(arr))

@csrf_exempt
def assocs(request):

	arr=[]
	
	assoc=associate.objects.all()

	if len(assoc) ==0:
		return HttpResponse('0')
	for i in range(0,len(assoc)):
		ser={}
		ser['name']=assoc[i].name
		ser['desig']=assoc[i].desig
		ser['url']=assoc[i].logo.url

		arr.append(ser)

	return HttpResponse(json.dumps(arr))

def index(request):
	sers=service.objects.all()
	context={"services":sers,}
	return render(request,"index.html",context)

@csrf_exempt
def contact(request):
	name=request.POST.get('name')
	email=request.POST.get('email')
	subject=request.POST.get('subject')
	service=request.POST.get('service')
	que=request.POST.get('query')

	q=query(name=name,email=email,subject=subject,service=service,query=que)
	q.save()

	message="Mr. "+name+" has requested the following service: "+service+" with the following query: \n\n"+que

	try:
		send_mail("New Query: "+subject,message,email,["bharatendu@logicpro.co.in","amazing.rohan@gmail.com",],fail_silently=False)
		return HttpResponse("Your query has been registered")
	except Exception as e:
		return HttpResponse("There was an error. Please try again later"+e)

def four(request):
	return render(request,"404.html")
