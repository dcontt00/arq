FROM python:3.9.12-slim

COPY requirements.txt /tmp
RUN pip install -r /tmp/requirements.txt

EXPOSE 8000

WORKDIR /usr/src/projectname

ENV PORT 8000
ENV HOST "0.0.0.0"
COPY ./src/ /projectname/src

WORKDIR /projectname

CMD ["uvicorn", "src.main:app"]